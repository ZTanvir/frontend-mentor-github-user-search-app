import locationImg from "../assets/icon-location.svg";
import companyImg from "../assets/icon-company.svg";
import twitterImg from "../assets/icon-twitter.svg";
import websiteImg from "../assets/icon-website.svg";

const UserCard = ({ userData }) => {
  const createdAt = String(new Date(userData.created_at).toDateString())
    .split(" ")
    .slice(1)
    .join(" ");

  return (
    <section>
      <div className="user-profile">
        <picture>
          <source media="(min-width:350px)" srcSet="" />
          <img src={userData.avatar_url} alt="" />
        </picture>
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.login}</p>
        </div>
        <p>{createdAt}</p>
      </div>
      <p className="user-bio">
        {userData.bio === null ? "This profile has no bio" : userData.bio}
      </p>
      <div className="user-data">
        <div>
          <span>Repos</span>
          <span>{userData.public_repos}</span>
        </div>
        <div>
          <span>Followers</span>
          <span>{userData.followers}</span>
        </div>
        <div>
          <span>Following</span>
          <span>{userData.following}</span>
        </div>
      </div>
      <div className="user-social">
        <div>
          <a href="#">
            <img src={locationImg} alt="location of the user" />
            {userData.location}
          </a>
          <a href="#">
            <img src={websiteImg} alt="blog of the user" />
            {userData.blog}
          </a>
        </div>
        <div>
          <a href={userData.twitter_username}>
            <img src={twitterImg} alt="twitter account of the user" />
            {userData.twitter_username}
          </a>
          <a href={userData.organizations_url}>
            <img src={companyImg} alt="company website of the user" />
            {userData.organizations_url}
          </a>
        </div>
      </div>
    </section>
  );
};
export default UserCard;
