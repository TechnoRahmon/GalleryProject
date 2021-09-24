const Image = require('./../Model/imageModel')



exports.home= async (req ,res , next ) =>{

           try {
                const images = await Image.find();

                if ( images.length ==0 ){
                    return res.render('home' , { message: 'There are no images to view'})
                }

                const { error , message } = req.query ; 

                if (error)
                return  res.render('home' , { error : error , data:images })

                if( message )
                    return res.render('home' , { message: message  , data:images})
                
                return res.render('home', { data:images} )



           } catch (error) {
            return res.redirect('/?error='+error.message)
           }



          
}




exports.new=async (req ,res , next ) =>{

    try {

        const file = req.file ; 
        const { caption } = req.body

        // check up if the file exisit 
        if ( !req.file ){
         return  res.redirect('/?error=Please+Upload+An+Image')    
        }
        // check the caption 
        if ( !caption ){
        return   res.redirect('/?error=plaes+enter+the+caption')
        }

        // create new Image object
        const image = new Image({
            title:file.filename,
            caption
        })

        // save the image object in DB

        await image.save()
        // redirect the client to home page with message query
        return res.redirect('/?message=image+has+been+uploaded+successfully')

    } catch (error) {
        return res.redirect('/?error='+error.message)
    }
}





