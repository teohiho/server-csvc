const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(5500, () => {
  console.log('JSON Server is running')
})

// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const path = require('path');
// const router = jsonServer.router(path.join(__dirname, 'db.json'));
// const middlewares = jsonServer.defaults();

// // define primary key columns for each resource
// const primaryKeys = {
// 	"posts": "id",
//   "user": "id_user",
//   "role": "id_role",
//   "danhmuc": "id_danhmuc",
//   "loaitaisan": "id_loaitaisan",
//   "donvi": "id_donvi",
//   "phong": "id_phong",
//   "nguonkinhphi": "id_kinhphi",
//   "taisan": "id_taisan",
//   "chuyentaisan": "id_chuyentaisan",
//   "thanhly": "id_thanhly"
// };

// const port = 5500;

// server.use(middlewares);
// server.use(router);
// server.listen(port, () => {
//   console.log('JSON Server is running on port: ' + port)
// });

// router.render = (req, res) => {
//   const resource = req.path.split('/')[1];
//   console.log("resource: ",resource)
//   let filteredResponse = res.locals.data;

//   // remapping internal id columns to dedicated resource columns
//   if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
// 	console.log("req.body.id: ",req.body.id)
// 	console.log("req.body[primaryKeys[resource]]: ",req.body[primaryKeys[resource]])
//     req.body.id = req.body[primaryKeys[resource]];
//   } else if (req.method === 'GET') {
//     filteredResponse = filterResponse(resource, res.locals.data);
//   }

//   // optional response wrapping to data attribute
//   res.jsonp({
//     data: filteredResponse
//   });
// };

// function filterResponse(resource, response) {
//   // don't filter if primaryKey is same as internal
//   if (primaryKeys[resource] === 'id') {
//     return response;
//   }

//   if (response instanceof Array) {
//     for (let i=0;i<response.length;i++) {
//       delete response[i].id;
//     }
//   } else {
//     delete response.id;
//   }

//   return response;
// }
