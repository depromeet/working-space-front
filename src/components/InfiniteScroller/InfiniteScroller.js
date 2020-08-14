import React, { useCallback, useRef, memo, useEffect } from "react";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import { WindowScroller } from "react-virtualized";
import LoadingBar from "../LoadingBar/LoadingBar";

const InfiniteScroller = props => {
  const { itemSize, datas, hasNextPage, isNextPageLoading, loadNextPage, LoadingIndicator, Item } = props;
  const itemCount = hasNextPage ? datas.length + 1 : datas.length;
  const isItemLoaded = useCallback(index => !hasNextPage || index < datas.length, [hasNextPage, datas]);
  const loadMoreItems = useCallback(isNextPageLoading ? () => {} : loadNextPage, [isNextPageLoading, loadNextPage]);
  const fixedSizeListRef = useRef();
  const MemoizedItem = memo(({ index }) => <Item data={datas[index]} />);

  const handleWindowScroll = useCallback(({ scrollTop }) => {
    fixedSizeListRef.current.scrollTo(scrollTop);
  }, []);

  const Row = ({ index, style }) => {
    if (!isItemLoaded(index)) {
      return (
        <div style={style}>
          <LoadingIndicator />
        </div>
      );
    }

    return (
      <div style={style}>
        <MemoizedItem index={index} />
      </div>
    );
  };

  const FixedList = memo(({ width, height, onItemsRendered, infiniteLoaderRef }) => {
    return (
      <FixedSizeList
        ref={ref => {
          infiniteLoaderRef(ref);
          fixedSizeListRef.current = ref;
        }}
        width={width}
        height={height}
        itemCount={itemCount}
        itemSize={itemSize}
        onItemsRendered={onItemsRendered}
        style={{ height: "100% !important" }}
        {...props}
      >
        {Row}
      </FixedSizeList>
    );
  });

  return (
    <>
      <WindowScroller onScroll={handleWindowScroll}>{() => <div />}</WindowScroller>
      <InfiniteLoader itemCount={itemCount} loadMoreItems={loadMoreItems} isItemLoaded={isItemLoaded}>
        {({ onItemsRendered, ref }) => {
          return <AutoSizer>{({ width, height }) => <FixedList width={width} height={height} onItemsRendered={onItemsRendered} infiniteLoaderRef={ref} />}</AutoSizer>;
        }}
      </InfiniteLoader>
    </>
  );
};

InfiniteScroller.defaultProps = {
  itemSize: 20, // height
  datas: Array.from(Array(100), (v, i) => `row${i}`),
  hasNextPage: false,
  isNextPageLoading: false,
  loadNextPage: () => console.log("loadNextPage"),
  LoadingIndicator: () => <LoadingBar />,
  Item: ({ data }) => <div>{data}</div>,
};

export default InfiniteScroller;
