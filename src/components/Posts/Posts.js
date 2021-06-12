import React from 'react'
import { useSelector } from 'react-redux'
import useStyls from './styles'
import Post from './Post/Post'
import { CircularProgress, Grid } from '@material-ui/core'

export default function Posts() {
    const classes = useStyls()
    const posts = useSelector((state) => state.posts)

    console.log(posts)
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid item key={post._id} xs={12} sm={6}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}
