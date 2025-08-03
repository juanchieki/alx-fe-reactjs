const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num);
};

const UserCard = ({ user }) => {
  const getJoinedDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <article className="user-card" aria-labelledby={`user-${user.id}-name`}>
      <div className="user-avatar-container">
        <img
          src={user.avatar_url}
          alt=""
          className="user-avatar"
          width={120}
          height={120}
          loading="lazy"
        />
      </div>
      <div className="user-info">
        <header className="user-header">
          <h2 id={`user-${user.id}-name`} className="user-name">
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="user-link"
              aria-label={`${user.login}'s GitHub profile (opens in new tab)`}
            >
              {user.login}
            </a>
          </h2>
          <p className="user-joined">
            Joined {getJoinedDate(user.created_at)}
          </p>
          {user.name && <p className="user-fullname">{user.name}</p>}
        </header>
        
        {user.bio && (
          <p className="user-bio" aria-label="User bio">
            {user.bio}
          </p>
        )}
        
        <div className="user-stats" aria-label="User statistics">
          <div className="stat">
            <span className="stat-label">Repos</span>
            <span className="stat-value">{formatNumber(user.public_repos)}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Followers</span>
            <span className="stat-value">{formatNumber(user.followers)}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Following</span>
            <span className="stat-value">{formatNumber(user.following)}</span>
          </div>
        </div>
        
        {(user.location || user.company || user.blog || user.twitter_username) && (
          <div className="user-meta">
            {user.location && (
              <div className="meta-item" aria-label="Location">
                <span className="meta-icon" aria-hidden="true">📍</span>
                <span>{user.location}</span>
              </div>
            )}
            
            {user.company && (
              <div className="meta-item" aria-label="Company">
                <span className="meta-icon" aria-hidden="true">🏢</span>
                <span>{user.company}</span>
              </div>
            )}
            
            {user.blog && (
              <div className="meta-item" aria-label="Website">
                <span className="meta-icon" aria-hidden="true">🌐</span>
                <a 
                  href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="meta-link"
                >
                  {user.blog}
                </a>
              </div>
            )}
            
            {user.twitter_username && (
              <div className="meta-item" aria-label="Twitter">
                <span className="meta-icon" aria-hidden="true">🐦</span>
                <a 
                  href={`https://twitter.com/${user.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meta-link"
                >
                  @{user.twitter_username}
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default UserCard;
