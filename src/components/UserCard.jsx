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
    <section className="user-container">
      <div className="user-profile">
        <img className="desktop-avatar-img" src={userData.avatar_url} alt="" />
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.login}</p>
        </div>
        <p>{createdAt}</p>
      </div>
      <p className="user-bio">
        {userData.bio === null ? "This profile has no bio" : userData.bio}
      </p>
      <div data-split="fraction:1/1/1" className="user-data">
        <div data-stack className="repos">
          <span>Repos</span>
          <span>{userData.public_repos}</span>
        </div>
        <div data-stack className="followers">
          <span>Followers</span>
          <span>{userData.followers}</span>
        </div>
        <div data-stack className="following">
          <span>Following</span>
          <span>{userData.following}</span>
        </div>
      </div>
      <div data-split="fraction:1/1" className="user-social">
        <div data-stack style={{ "--gutter": "1rem" }}>
          <a data-inline href="#" style={{ "--gutter": "1rem" }}>
            <img src={locationImg} alt="location of the user" />
            <span>
              {Boolean(userData.location) ? userData.location : "Not available"}
            </span>
          </a>
          <a data-inline href={userData.blog} style={{ "--gutter": "1rem" }}>
            <img src={websiteImg} alt="blog of the user" />
            <span>
              {Boolean(userData.blog) ? userData.blog : "Not available"}
            </span>
          </a>
        </div>
        <div data-stack style={{ "--gutter": "1rem" }}>
          <a
            data-inline
            href={userData.twitter_username}
            style={{ "--gutter": "1rem" }}
          >
            <img src={twitterImg} alt="twitter account of the user" />
            <span>
              {Boolean(userData.twitter_username)
                ? userData.twitter_username
                : "Not available"}
            </span>
          </a>
          <a
            data-inline
            href={userData.organizations_url}
            style={{ "--gutter": "1rem" }}
          >
            <img src={companyImg} alt="company website of the user" />
            <span>
              {Boolean(userData.organizations_url)
                ? userData.organizations_url
                : "Not available"}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default UserCard;
