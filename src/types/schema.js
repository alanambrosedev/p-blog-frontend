/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 * @property {string} email
 */

/**
 * @typedef {Object} Category
 * @property {number} id
 * @property {string} name
 * @property {string} slug
 */

/**
 * @typedef {Object} Post
 * @property {number} id
 * @property {number} user_id
 * @property {number} category_id
 * @property {string} title
 * @property {string} slug
 * @property {string|null} image
 * @property {sting} published_at
 * @property {User} user
 * @property {Category} category
 */

export {};
