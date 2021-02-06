import React from 'react'

export const Pagination = (props) => {

    const { onLeftClick, onRightClick, page, totalPages} = props;

    return (
        <div className="pagination">
            <button onClick={onLeftClick}><span role="img" aria-label="Left-hand">👈</span></button>
            <div className="pagination-total-pages">{page} de {totalPages}</div>
            <button onClick={onRightClick}><span role="img" aria-label="right-hand">👉</span></button>
        </div>
    )
}
