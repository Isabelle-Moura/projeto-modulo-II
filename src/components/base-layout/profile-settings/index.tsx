// Style
import * as S from './style';

// Icons
import UserProfileIcon from '../../../assets/icons/user-settings.png';
import LogOutIcon from '../../../assets/icons/logout.png';
import UserBackground from '../../../assets/icons/login-options-background.png';

// ---

const UserSettings = () => {
   return (
      <>
         <div>
            {/* User Settings Background */}
            <S.Background src={UserBackground} />
            <S.ButtonsWrapper>
               {/* Link to user profile page */}
               <S.StyledLink to="/perfil-do-usuario/dados">
                  Usuário
                  <img src={UserProfileIcon} />
               </S.StyledLink>

               <S.HR />

               {/* Link to login page */}
               <S.StyledLink to="/">
                  Sair
                  <img src={LogOutIcon} />
               </S.StyledLink>
            </S.ButtonsWrapper>
         </div>
      </>
   );
};

export default UserSettings;
