import React from 'react';
import BaseContainer from '../../containers/global/container';
import IconProfile from '../../containers/profile/iconProfile'
import { Container} from './styles.js';

const Profile = () => {
    return (
        <BaseContainer>
            <Container>
                <div>
                    <IconProfile />
                </div>
            </Container>
        </BaseContainer>
    );
};

export default Profile;