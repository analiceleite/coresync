import React from 'react';
import * as S from './styles';
import Status from '../../../components/training/trainingStatus';
import PolkaDots from '../../../components/global/dots';

const TrainingView = () => {
  return (
    <S.Container>
      <S.Header>
        <div>
          <h2>UI/UX (Para Iniciantes)</h2>
          <p>Esse treinamento envolve a área de design e experiência de usuário.</p>
        </div>
        <div>
        <Status/>
        </div>
      </S.Header>
      <S.Content>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Quia voluptatem ipsam delectus odio unde perferendis. <br/><br/>
          quis enim eveniet impedit, esse dolores rerum minus eius. Ipsa, dicta. Repellat.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto adipisci modi veniam, nostrum veritatis.
        </p>
        <S.VideoContainer>
          <S.Video controls>
            <source src='' type='video/mp4'/>
          </S.Video>
        </S.VideoContainer>
      </S.Content>
      <S.PolkaDotsContainer>
        <PolkaDots/>  
      </S.PolkaDotsContainer>
    </S.Container>
  );
};

export default TrainingView;