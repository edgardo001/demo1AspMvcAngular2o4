﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace demo1AspMvcAngular2o4.Controllers
{
    public class demoController : ApiController
    {
        // GET: api/demo
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/demo/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/demo
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/demo/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/demo/5
        public void Delete(int id)
        {
        }
    }
}
