const Post =require('../model/Post');
exports.get_all_posts=(async(req, res, next) => {
   savedPost= await Post.find()
    .then( (savedPost) => {
        res.json(savedPost);
    })
    .catch(
         (err)=>{
             res.json({error:err})
         }

    )
    
});

exports.addPost=(async(req, res, next) => {
   const post= new Post(
       { 
        title:req.body.title,
        content:req.body.content
       }
    );
    const savedpost=await post.save()
    .then(
        res.json({status:"post dispatched Successfully",
        post:post})
        
      )
    .catch(err=>res.json({error:err}))
});
exports.get_post_by_id=(async(req, res, next) => {
    await Post.findById(req.params.id)
    .then( (post) => {
        res.json(post);
    })
    .catch(
         (err)=>{
             res.json({error:err})
         }

    ) 
});


exports.delete_Post=(async(req, res, next) => {
   
    await Post.findById(req.params.id)

    .then(
     post => {
      post.delete()
        .then(
            post => {
            res.json({Post:'post delelted successfully',
                    status:'success',
                    post:post
                     })
           }
       ) .catch(err=>res.json({error:err}))
        }
      )
    .catch(err=>res.json({error:err}))
   
});









