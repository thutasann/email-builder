// @ts-check
import { v } from 'convex/values'
import { mutation } from './_generated/server'

/**
 * Create a user
 * @param {string} name - The name of the user
 * @param {string} email - The email of the user
 * @param {string} picture - The picture of the user
 */
export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    picture: v.string(),
  },
  handler: async (ctx, args) => {
    const users = await ctx.db
      .query('users')
      .filter((q) => q.eq(q.field('email'), args.email))
      ?.collect()

    if (users?.length == 0) {
      const result = await ctx.db.insert('users', {
        name: args.name,
        email: args.email,
        picture: args.picture,
        credits: 3,
      })
      return result
    }

    return users[0]
  },
})
