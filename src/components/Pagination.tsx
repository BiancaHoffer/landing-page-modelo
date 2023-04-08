
//itensPerPage = itens por página
// totalItens = total de itens da lista
// offset = para caso eu tenha 0, 1, 2 e queira pular direto para a dois...

const MAX_ITENS = 6;
const MAX_LEFT = (MAX_ITENS - 1) / 2;

// @ts-ignore
export function Pagination({ itensPerPage, totalItens, offset, setOffSet }) {
  const currentPage = offset ? (offset / itensPerPage) + 1 : 1;
  const totalPages = Math.ceil(totalItens / itensPerPage);
  const firstButtonPagination = Math.max(currentPage - MAX_LEFT, 1);

  return (
    <div>
      {Array.from({ length: MAX_ITENS })
        .map((_, index) => index + firstButtonPagination)
        .map(page => {
          return (
            <div>
              <button onClick={() => setOffSet((page - 1) * itensPerPage)}>
                {page}
              </button>
            </div>
          )
        })}
    </div>
  )
}