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

  // Check if this is an advanced search result
  const isAdvancedResult = user.meetsCriteria !== undefined;
  const searchCriteria = user.searchCriteria || {};

  return (
    <article 
      className={`bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300 transform hover:scale-[1.01] ${
        isAdvancedResult ? 'border-l-4 border-blue-500' : ''
      }`}
      aria-labelledby={`user-${user.id}-name`}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* User Avatar */}
        <div className="flex-shrink-0">
          <img
            src={user.avatar_url}
            alt=""
            className="w-32 h-32 rounded-full border-4 border-gray-700"
            width={128}
            height={128}
            loading="lazy"
          />
        </div>
        
        {/* User Info */}
        <div className="flex-1">
          {/* Advanced Search Badge */}
          {isAdvancedResult && (
            <div className="mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900 text-blue-100">
                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Advanced Search Match
              </span>
            </div>
          )}
          
          {/* User Header */}
          <header className="mb-4">
            <div className="flex flex-wrap items-baseline gap-2">
              <h2 id={`user-${user.id}-name`} className="text-2xl font-bold text-white">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-200"
                  aria-label={`${user.login}'s GitHub profile (opens in new tab)`}
                >
                  {user.login}
                </a>
              </h2>
              {user.name && (
                <p className="text-lg text-gray-300">
                  ({user.name})
                </p>
              )}
            </div>
            
            <p className="text-sm text-gray-400">
              Joined {getJoinedDate(user.created_at)}
            </p>
          </header>
          
          {/* User Bio */}
          {user.bio && (
            <p className="text-gray-300 mb-4" aria-label="User bio">
              {user.bio}
            </p>
          )}
        
          {/* User Stats */}
          <div className="grid grid-cols-3 gap-4 bg-gray-900/50 p-4 rounded-lg mb-4" aria-label="User statistics">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">Repositories</div>
              <div className="text-xl font-bold text-white">{formatNumber(user.public_repos)}</div>
              {isAdvancedResult && searchCriteria.minRepos && (
                <div className="text-xs mt-1 text-blue-400">
                  (Min: {searchCriteria.minRepos}+)
                </div>
              )}
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">Followers</div>
              <div className="text-xl font-bold text-white">{formatNumber(user.followers)}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">Following</div>
              <div className="text-xl font-bold text-white">{formatNumber(user.following)}</div>
            </div>
          </div>
          
          {/* User Links */}
          <div className="space-y-3">
            {/* Location with advanced search highlight */}
            {user.location && (
              <div className="flex items-center text-gray-300">
                <span className="w-6 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className={isAdvancedResult && searchCriteria.location ? 'text-blue-400 font-medium' : ''}>
                  {user.location}
                  {isAdvancedResult && searchCriteria.location && (
                    <span className="ml-2 text-xs bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded-full">
                      Filtered
                    </span>
                  )}
                </span>
              </div>
            )}
            
            {/* Blog/Website */}
            {user.blog && (
              <div className="flex items-center text-gray-300">
                <span className="w-6 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
                <a 
                  href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline hover:text-blue-300 transition-colors"
                >
                  {user.blog.replace(/^https?:\/\//, '')}
                </a>
              </div>
            )}
            
            {/* Twitter */}
            {user.twitter_username && (
              <div className="flex items-center text-gray-300">
                <span className="w-6 text-gray-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </span>
                <a 
                  href={`https://twitter.com/${user.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline hover:text-blue-300 transition-colors"
                >
                  @{user.twitter_username}
                </a>
              </div>
            )}
            
            {/* Company */}
            {user.company && (
              <div className="flex items-center text-gray-300">
                <span className="w-6 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
                <span>{user.company.replace(/^@/, '')}</span>
              </div>
            )}
            
            {/* Advanced Search Criteria Summary */}
            {isAdvancedResult && (
              <div className="mt-4 pt-4 border-t border-gray-700">
                <h4 className="text-sm font-medium text-gray-400 mb-2">Search Criteria Matched:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  {searchCriteria.location && (
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Location: {searchCriteria.location}
                    </li>
                  )}
                  {searchCriteria.minRepos && (
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Min. Repositories: {searchCriteria.minRepos}+
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
