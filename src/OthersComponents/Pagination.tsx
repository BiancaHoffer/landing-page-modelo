import { ReactNode } from 'react'
import { useCallback, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationNav1Props {
  pageIndex: number;
  pageCount: number;
  gotoPage: React.Dispatch<React.SetStateAction<number>>;
  canPreviousPage: boolean;
  canNextPage: boolean;
  textColor: 'white' | 'blue800' | 'blue500';
}

interface Button2Props {
  content?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  textColor: 'white' | 'blue800' | 'blue500';
}

function Button2({ content, onClick, active, disabled, textColor }: Button2Props) {
  const variantText = {
    white: 'text-white',
    blue800: 'text-blue800',
    blue500: 'text-blue500',
  }

  return (
    <button
      className={`flex flex-col cursor-pointer rounded-3xl items-center justify-center w-9 h-9 text-sm font-normal transition-colors
      ${active ? `text-white bg-orange500 rounded-3xl` : `${variantText[textColor]} bg-transparent`}
      ${!disabled
          ? ' '
          : ''
        }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

function PaginationNav1({
  gotoPage,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
  textColor,
}: PaginationNav1Props) {
  const renderPageLinks = useCallback(() => {
    if (pageCount === 0) return null;
    const visiblePageButtonCount = 3;
    let numberOfButtons =
      pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
    const pageIndices = [pageIndex];
    numberOfButtons--;
    [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
      const pageNumberBefore = pageIndices[0] - 1;
      const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;
      if (
        pageNumberBefore >= 0 &&
        (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
      ) {
        pageIndices.unshift(pageNumberBefore);
      } else {
        pageIndices.push(pageNumberAfter);
      }
    });
    return pageIndices.map((pageIndexToMap) => (
      <li key={pageIndexToMap}>
        <Button2
          content={pageIndexToMap + 1}
          onClick={() => gotoPage(pageIndexToMap)}
          active={pageIndex === pageIndexToMap}
          textColor={textColor}
        />
      </li>
    ));
  }, [pageCount, pageIndex]);
  return (
    <ul className="flex gap-2">
      <li>
        <Button2
          content={
            <div className="flex ml-1">
              <FaChevronLeft size="12" />
            </div>
          }
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          textColor={textColor}
        />
      </li>
      {renderPageLinks()}
      <li>
        <Button2
          content={
            <div className="flex ml-1">
              <FaChevronRight size="12" />

            </div>
          }
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          textColor={textColor}
        />
      </li>
    </ul>
  );
}

interface PaginationProps {
  textColor?: 'white' | 'blue800' | 'blue500';
}

export function Pagination({ textColor = 'blue800' }: PaginationProps) {
  const [pageIndex, setPageIndex] = useState(0);
  const pageCount = 10;


  return (
    <PaginationNav1
      gotoPage={setPageIndex}
      canPreviousPage={pageIndex > 0}
      canNextPage={pageIndex < pageCount - 1}
      pageCount={pageCount}
      pageIndex={pageIndex}
      textColor={textColor}
    />
  );
}
