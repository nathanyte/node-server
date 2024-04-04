import {
  registerForEvent
} from "./chunk-AISWWT3K.mjs";
import {
  errorHandler
} from "./chunk-ONKUFM5P.mjs";
import {
  checkIn
} from "./chunk-LVR43FF3.mjs";
import {
  createEvent
} from "./chunk-M354USDJ.mjs";
import "./chunk-OBKU7LMC.mjs";
import {
  getAttendeeBadge
} from "./chunk-JG6LSHJ4.mjs";
import {
  getEventAttendees
} from "./chunk-SUTKDUUT.mjs";
import {
  getEvent
} from "./chunk-3BK2S2WR.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "API do Nathan saindo do forno",
      description: "Primeira API construida pelo Nathan =)",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({
  port: 3333,
  host: "0.0.0.0"
}).then(() => {
  console.log("HTTP server running...");
});
