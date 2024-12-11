
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfoleInfo';

const Profile = (props) => {
debugger

  return (
    <div style={style.profile}>
      <ProfileInfo />
      <MyPosts posts = {props.posts} addPost = {props.addPost} newPostText={props.newPostText} updateNewPostText = {props.updateNewPostText}/>
    </div>
  );
}

export default Profile;