import locationImg from "../assets/icon-location.svg";
import companyImg from "../assets/icon-company.svg";
import twitterImg from "../assets/icon-twitter.svg";
import websiteImg from "../assets/icon-website.svg";
import Loading from "../components/Loading";

const UserCard = ({ loading, userData }) => {
  const createdAt =
    loading === false
      ? userData &&
        String(new Date(userData.created_at).toDateString())
          .split(" ")
          .slice(1)
          .join(" ")
      : null;
  // display msg or data based on api response
  const cardData = userData && (
    <>
      <img
        className="desktop-avatar-img"
        src={userData.avatar_url}
        alt="person face"
      />
      <div
        data-stack
        style={{ "--gutter": "1rem" }}
        className="user-descriptions"
      >
        <div
          data-split="fraction:auto/1"
          className="user-profile"
          style={{ "--gutter": "1rem" }}
        >
          <img
            className="mobile-avatar-img"
            src={userData.avatar_url}
            alt="person face"
          />
          <div data-split="fraction:1">
            <div>
              <h2 className="username">{userData.name}</h2>
              <h3 className="user-id">@{userData.login}</h3>
            </div>
            <p className="join-time">Joined {createdAt}</p>
          </div>
        </div>
        <p className="user-bio">
          {userData.bio === null ? "This profile has no bio" : userData.bio}
        </p>
        <div
          data-split="fraction:1/1/1"
          style={{ "--gutter": "1rem" }}
          className="user-data"
        >
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
        <div
          data-split="fraction:1"
          className="user-social"
          style={{ "--gutter": "1rem" }}
        >
          <div data-stack style={{ "--gutter": "1rem" }}>
            <a
              target="_blank"
              data-inline
              href="#"
              style={{ "--gutter": "1rem" }}
            >
              <img src={locationImg} alt="location of the user" />
              <span
                className={Boolean(userData.location) ? "found" : "notFound"}
              >
                {Boolean(userData.location)
                  ? userData.location
                  : "Not available"}
              </span>
            </a>
            <a
              target="_blank"
              data-inline
              href={userData.blog}
              style={{ "--gutter": "1rem" }}
            >
              <img src={websiteImg} alt="blog of the user" />
              <span className={Boolean(userData.blog) ? "found" : "notFound"}>
                {Boolean(userData.blog) ? userData.blog : "Not available"}
              </span>
            </a>
          </div>
          <div data-stack style={{ "--gutter": "1rem" }}>
            <a
              target="_blank"
              data-inline
              href={userData.twitter_username}
              style={{ "--gutter": "1rem" }}
            >
              <img src={twitterImg} alt="twitter account of the user" />
              <span
                className={
                  Boolean(userData.twitter_username) ? "found" : "notFound"
                }
              >
                {Boolean(userData.twitter_username)
                  ? userData.twitter_username
                  : "Not available"}
              </span>
            </a>
            <a
              data-inline
              target="_blank"
              href={userData.html_url}
              style={{ "--gutter": "1rem" }}
            >
              <img src={companyImg} alt="company website of the user" />
              <span
                className={Boolean(userData.html_url) ? "found" : "notFound"}
              >
                {Boolean(userData.html_url)
                  ? userData.html_url
                  : "Not available"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <section
      style={{ "--gutter": "1rem" }}
      data-split="fraction:1"
      className="user-container"
    >
      {loading ? (
        <div
          className="loading-container"
          style={loading ? { height: "246px" } : { minHeight: "auto" }}
          data-center="center-children"
        >
          <Loading />
        </div>
      ) : (
        cardData
      )}
    </section>
  );
};
export default UserCard;
