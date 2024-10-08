import React from 'react';
import BaseContainer from '../../containers/global/baseContainer';
import IconProfile from '../../containers/profile/iconProfile'
import FormProfile from '../../containers/profile/formProfile';

const Profile = () => {
    return (
        <BaseContainer>
            <div>
                <IconProfile />
            </div>
            <div>
                <FormProfile/>
            </div>
        </BaseContainer>
    );
};

export default Profile;