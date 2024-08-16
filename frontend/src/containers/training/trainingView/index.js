import React from 'react';
import { Container, Header, Content, Video, VideoContainer } from './styles';
import Status from '../../../components/training/status';

const TrainingView = () => {
  return (
    <Container>
      <Header>
        <div>
          <h2>UI/UX (Para Iniciantes)</h2>
          <p>Esse treinamento envolve a área de design e experiência de usuário.</p>
        </div>
        <div>
        <Status></Status>
        </div>
      </Header>
      <Content>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Quia voluptatem ipsam delectus odio unde perferendis. <br/><br/>
          quis enim eveniet impedit, esse dolores rerum minus eius. Ipsa, dicta. Repellat.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto adipisci modi veniam, nostrum veritatis.
        </p>
        <VideoContainer>
          <Video controls>
            <source src='' type='video/mp4'/>
          </Video>
        </VideoContainer>
      </Content>
    </Container>
  );
};

export default TrainingView;