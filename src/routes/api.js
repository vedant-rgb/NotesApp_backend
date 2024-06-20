const express=require('express');
const router=express.Router();
const Note = require("../models/Note");



router.get("/alllist",async(req,res)=>{
    var notes=await Note.find();
    res.json(notes);
});

router.post("/list",async(req,res)=>{
    var notes=await Note.find({userid:req.body.userid});
    res.json(notes);
});


router.post("/add",async(req,res)=>{

    await Note.deleteOne({id:req.body.id});//used for updating data i.e delete it and hen add new data

    const newNote=new Note({
        id:req.body.id,
        userid:req.body.userid,
        title:req.body.title,
        content:req.body.content
    });
    await newNote.save();
    const response={ message:"New Note Created!"+`id:${req.body.userid}`};

    res.json(response);
});

// router.put('/update/:userid', async (req, res) => {
//     try {
//         const userid = req.params.userid;
//         const idToupdate={userid};//must be object so { };impp
//         const NoteToBeUpdate={
//             title: req.body.title,
//             content: req.body.content,
//         };
//         const updatedNote = await Note.findOneAndUpdate(idToupdate,NoteToBeUpdate,
//         { new: true } //returns updated document
//         );

//         if (!updatedNote) {
//             return res.status(404).json({ message: 'Note not found' });
//         }

//         res.json(updatedNote);
//     } catch (error) {
//         console.error('Error updating note:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });    

// router.delete('/delete/:userid',async(req,res)=>{
//     try {
//         const filter={
//             userid:req.params.userid
//         };//must be object impp
//         const deletedNote = await Note.deleteOne(filter).then(()=>{
//             res.json({message:"Node Deleted with"+`id:${req.params.userid}`});
//         });

//     } catch (error) {
//         console.error('Error updating note:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

router.post('/delete',async(req,res)=>{
    try {
        // const filter={
        //     id:req.body.id
        // };//must be object impp
         await Note.deleteOne({id:req.body.id}).then(()=>{
            res.json({message:"Node Deleted with"+`id:${req.params.userid}`});
        });

    } catch (error) {
        console.error('Error updating note:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;