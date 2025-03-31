import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { config } from "./config/app.config";
import { HTTPSTATUS } from "./config/http.config";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import { asyncHandler } from "./middlewares/asyncHandler.middeware";
import { BadRequestException } from "./utils/app-error";


const app = express();

const BASE_PATH = config.BASE_PATH;

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(    
    cors({
        origin: config.FRONTEND_ORIGIN,
        credentials: true
    })
)

app.get(
    "/",
    asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
      throw new BadRequestException("throwing async error");
      res.status(HTTPSTATUS.OK).json({
        message: "Hello Jii Kaise Hooo",
      });
    })
  );



app.use(errorHandler);


app.listen(config.PORT, async () => {
    console.log(`Server Listening on port ${config.PORT} in ${config.NODE_ENV}`);
});