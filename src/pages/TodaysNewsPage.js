import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Line from '../components/Line';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import * as styleD from '../styles/TodaysNewsPage';

export default function TodaysNewsPage() {
  const [selectedNews, setSelectedNews] = useState('오늘의 뉴스');
  const [selectedCategory, setSelectedCategory] = useState('정치');

  return (
    <div>
      <Navbar />
      <Line/>
      <Header />
      <Line />
      <styleD.NewsContainer>
        <styleD.TodaysNewsContainer>
          {['오늘의 뉴스', '주간 뉴스', '월간 뉴스'].map((news) => (
            <p
              key={news}
              className={selectedNews === news ? 'selected' : ''}
              onClick={() => setSelectedNews(news)}
            >
              {news}
            </p>
          ))}
        </styleD.TodaysNewsContainer>
        <styleD.NewsCategoryContainer>
          {['정치', '경제', '사회', '과학', '연예', '스포츠'].map((category) => (
            <p
              key={category}
              className={selectedCategory === category ? 'selected' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </p>
          ))}
        </styleD.NewsCategoryContainer>
        <styleD.NewsBoxContainer>
            {
                Array(10).fill(0).map((_, index) => (
                    <styleD.NewsBox key={index}>
											<styleD.NewsImg>
                      	<img src='https://picsum.photos/100/100' alt=''/>
											</styleD.NewsImg>
                      <div>
                        <styleD.NewsTitle>제목</styleD.NewsTitle>
                        <styleD.NewsContent>본문</styleD.NewsContent>
                      </div>
                    </styleD.NewsBox>
                ))
            }
        </styleD.NewsBoxContainer>
      </styleD.NewsContainer>
    </div>
  );
}
