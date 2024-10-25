import type { NextApiRequest, NextApiResponse } from 'next'
// import dbConnect from '@/utils/db/dbConnect'
// const MONGODBURI = process.env.MONGODB!
// import clientPromise from '@/utils/db/mongodb'
// import { MongoClient } from 'mongodb'


// async function listDatabases(client: MongoClient){
//   const db = client.db('Legateau')
//   const coll = db.collection('FranchiseStores')
//   const items = coll.find()
//   // console.log(items)
//   return items
// }


// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { method } = req
//   await dbConnect()
//   await clientPromise
//   switch (method) {
//     case 'GET':
//       const opts = {
//         dbName: 'Legateau'
//       }
//       try {
        
//     const clt = new MongoClient(MONGODBURI)
//     const leaderboard = clt.db("Legateau").collection("FranchiseStores")
    
//     // const topUsers = await leaderboard.find().sort({ score: -1 }).limit(3).toArray();
//     const topUsers = await leaderboard.find().toArray();
//     console.log('Store List:', topUsers);
//     clt.close()

//         res.status(200).json({ success: true, data: topUsers  })
//       } catch (error) {
//         res.status(400).json({ success: false })
//       }

//       // try {
//       //   const clt = new MongoClient(MONGODBURI)

//       //   res.status(201).json({ success: true, data: topUsers })
//       // } catch (error) {
//       //   res.status(400).json({ success: false })
//       // }
//       break
//     case 'POST':
      
//       break
//       case 'PATCH':
//       try {
//         const clt = new MongoClient(MONGODBURI)
//         const huntCollection = clt.db("Legateau").collection("FranchiseStores")
//         const crd = await huntCollection.updateOne({username:req.body.username},{$set:{score:req.body.score}})


//         // const card = await Card.create(
//         //   req.body
//         // ) 
//       clt.close()

//         res.status(201).json({ success: true, data: crd })
//       } catch (error) {
//         console.log(error)
//         res.status(400).json({ success: false, error: error })
//       }
//       break
//     default:
//       res.status(400).json({ success: false })
//       break
//   }
// }

const Login = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Handle login logic
    // Authenticate user
    res.status(200).json({ message: 'Logged in successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default Login;