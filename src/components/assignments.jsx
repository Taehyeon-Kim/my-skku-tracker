import React, { Component } from 'react';
import Assignment from './assignment';

class Assignments extends Component {
  state = {
    subjects: [
      {
        id: 1,
        name: '네트워크',
        info: '5주차 과제 : 없었으면 좋겠다 🤪',
        color: '#FFD5D5',
        grade: '희망학점',
      },
      {
        id: 2,
        name: '컴퓨터교과교육론',
        info: '5주차 과제 : 없었으면 좋겠다 🤪',
        color: '#EDD5FF',
        grade: '희망학점',
      },
      {
        id: 3,
        name: '운영체제',
        info: '5주차 과제 : 없었으면 좋겠다 🤪',
        color: '#D5DAFF',
        grade: 'A+기원',
      },
      {
        id: 4,
        name: '피지컬컴퓨팅',
        info: '5주차 과제 : 없었으면 좋겠다 🤪',
        color: '#D5FFDD',
        grade: '희망학점',
      },
      {
        id: 5,
        name: 'VR 그리고 AR',
        info: '5주차 과제 : 없었으면 좋겠다 🤪',
        color: '#FDFFD5',
        grade: '희망학점',
      },
    ],
  };
  render() {
    return (
      // 중괄호 {}로 감싸진 arrow 함수는 return문이 없다면 return값을 반환하지 않는다.
      // 화면에 뿌리기 위해서는 컴포넌트를 return해주어야 한다.
      // ()로 감싸진 부분은 return문을 작성하지 않아도 return 된다.
      <ul>
        {this.state.subjects.map((subject) => (
          <Assignment key={subject.id} subject={subject} />
        ))}
      </ul>
    );
  }
}

export default Assignments;
