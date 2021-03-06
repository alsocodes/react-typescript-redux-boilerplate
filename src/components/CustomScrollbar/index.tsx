import React, { useState, useCallback, useEffect, useRef, FC } from 'react';
import './styles.css';

const SCROLL_BOX_MIN_HEIGHT = 20;

type Props = {
  children?: any;
  className?: string;
  restProps?: any;
};

const CustomScrollbar: FC<Props> = ({ children, className, ...restProps }) => {
  const [hovering, setHovering] = useState(false);
  const [scrollBoxHeight, setScrollBoxHeight] = useState(SCROLL_BOX_MIN_HEIGHT);
  const [isOverflow, setIsOverflow] = useState(false);
  const [scrollBoxTop, setScrollBoxTop] = useState(0);
  const [lastScrollThumbPosition, setScrollThumbPosition] = useState(0);
  const [isDragging, setDragging] = useState(false);

  const handleMouseOver = useCallback(() => {
    !hovering && setHovering(true);
  }, [hovering]);

  const handleMouseOut = useCallback(() => {
    !!hovering && setHovering(false);
  }, [hovering]);

  const handleDocumentMouseUp = useCallback(
    (e) => {
      if (isDragging) {
        e.preventDefault();
        setDragging(false);
      }
    },
    [isDragging],
  );

  const handleDocumentMouseMove = useCallback(
    (e) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
        if (scrollHostRef.current === null) {
          return;
        }

        const scrollHostElement = scrollHostRef.current;
        const { scrollHeight, offsetHeight } = scrollHostElement;

        const deltaY = e.clientY - lastScrollThumbPosition;
        const percentage = deltaY * (scrollHeight / offsetHeight);

        setScrollThumbPosition(e.clientY);
        setScrollBoxTop(
          Math.min(Math.max(0, scrollBoxTop + deltaY), offsetHeight - scrollBoxHeight),
        );
        scrollHostElement.scrollTop = Math.min(
          scrollHostElement.scrollTop + percentage,
          scrollHeight - offsetHeight,
        );
      }
    },
    [isDragging, lastScrollThumbPosition, scrollBoxHeight, scrollBoxTop],
  );

  const handleScrollThumbMouseDown = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setScrollThumbPosition(e.clientY);
    setDragging(true);
    console.log('handleScrollThumbMouseDown');
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollHostRef.current === null) {
      return;
    }
    const scrollHostElement = scrollHostRef.current;
    const { scrollTop, scrollHeight, offsetHeight } = scrollHostElement;

    const sTop = !isNaN(scrollTop) ? parseInt(scrollTop.toString()) : scrollTop;
    const sHeight = !isNaN(scrollHeight)
      ? parseInt(scrollHeight.toString())
      : scrollHeight;

    let newTop = (sTop / sHeight) * offsetHeight;
    // newTop = newTop + parseInt(scrollTop, 10);
    newTop = Math.min(newTop, offsetHeight - scrollBoxHeight);
    setScrollBoxTop(newTop);
  }, []);

  const scrollHostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollHostRef.current === null) {
      return;
    }

    const scrollHostElement = scrollHostRef.current;
    const { clientHeight, scrollHeight } = scrollHostElement;
    const scrollThumbPercentage = clientHeight / scrollHeight;
    const scrollThumbHeight = Math.max(
      scrollThumbPercentage * clientHeight,
      SCROLL_BOX_MIN_HEIGHT,
    );
    // console.log('XSS', scrollThumbHeight, clientHeight, scrollHeight);
    setScrollBoxHeight(scrollThumbHeight);
    if (scrollThumbHeight < clientHeight) setIsOverflow(true);
    scrollHostElement.addEventListener('scroll', handleScroll, true);
    return function cleanup() {
      scrollHostElement.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  useEffect(() => {
    //this is handle the dragging on scroll-thumb
    document.addEventListener('mousemove', handleDocumentMouseMove);
    document.addEventListener('mouseup', handleDocumentMouseUp);
    document.addEventListener('mouseleave', handleDocumentMouseUp);
    return function cleanup() {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
      document.removeEventListener('mouseleave', handleDocumentMouseUp);
    };
  }, [handleDocumentMouseMove, handleDocumentMouseUp]);

  return (
    <div
      className={'scrollhost-container'}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      <div ref={scrollHostRef} className={`scrollhost ${className}`} {...restProps}>
        {children}
      </div>
      <div className={'scroll-bar'} style={{ opacity: hovering ? 1 : 0 }}>
        <div
          className={'scroll-thumb'}
          style={{ height: scrollBoxHeight, top: scrollBoxTop }}
          onMouseDown={handleScrollThumbMouseDown}
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default CustomScrollbar;
