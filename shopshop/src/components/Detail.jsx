import React from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
  let { id } = useParams();  // useParams로 URL의 id를 가져옵니다.

  // id는 문자열로 반환되므로 숫자로 변환
  id = Number(id);

  // props.shop 배열이 비어 있거나 id에 해당하는 값이 없을 경우를 처리
  if (!props.shop || !props.shop[id]) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  
  const shopItem = props.shop[id];  // 해당 제품의 정보

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* 동적으로 imgUrl을 가져와서 사용 */}
          <img src={shopItem.imgUrl} width="100%" alt={shopItem.title} />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shopItem.title}</h4>
          <p>{shopItem.content}</p>
          <p>{shopItem.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
