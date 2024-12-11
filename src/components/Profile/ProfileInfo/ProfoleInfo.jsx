import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://interier-foto.ru/wp-content/uploads/dlinnye-foto-2.jpg' width='1200px' alt="Background" />
      </div>
      <div className={style.descriptionBlock}>
        ava + description 
      </div>
    </div>
  );
}

export default ProfileInfo;