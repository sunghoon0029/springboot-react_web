import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { boardPage } from '../../modules/board';

import Layout from '../../components/layout/Layout';
import { Button, Card } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import '../../assets/css/Pagination.css';

const BoardList = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const boardData = useSelector(state => state.board);

  const [page, setPage] = useState(1);

  const moveToWrite = () => {
    navigate('/board/write');
  };

  const backToHome = () => {
    navigate('/');
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    dispatch(boardPage(newPage - 1));
  };

  useEffect(() => {
    dispatch(boardPage(page - 1));
  }, [dispatch, page]);

  if (!boardData.boardPage) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <div>
        {boardData.boardPage && boardData.boardPage.content.map((board) => (
          <Card key={board.id}>
            <Card.Body>
              <Link to={`/board/${board.id}`}>
                <Card.Title>{board.title}</Card.Title>
              </Link>
              <Card.Text>{board.member}</Card.Text>
              <p className="text-muted">작성일자: {new Date(board.createdAt).toLocaleString()}</p>
              <p className="text-muted">조회수: {board.hits}</p>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Pagination
        activePage={page}
        itemsCountPerPage={boardData.boardPage.size}
        totalItemsCount={boardData.boardPage.totalElements}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={handlePageChange}
      />

      <Button variant="primary" onClick={ moveToWrite }>게시글 작성</Button>
      <Button variant="primary" onClick={ backToHome }>뒤로가기</Button>
    </Layout>
  );
};

export default BoardList;