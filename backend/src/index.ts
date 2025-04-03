import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { config } from "./config/app.config";
import { HTTPSTATUS } from "./config/http.config";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import { asyncHandler } from "./middlewares/asyncHandler.middeware";
import { BadRequestException } from "./utils/app-error";
import { initializeDatabase } from "./database/database";
import authRoutes from "./routes/auth.route";
import passport from "passport";
import eventRoutes from "./routes/event.route";
import availabilityRoutes from "./routes/availability.route";


const app = express();

const BASE_PATH = config.BASE_PATH;

app.use(express.json());
app.use(passport.initialize());
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
        message: "Hello Subscribe to the channel",
      });
    })
  );

app.use(`${BASE_PATH}/auth`, authRoutes);
app.use(`${BASE_PATH}/event`, eventRoutes);
app.use(`${BASE_PATH}/availability`, availabilityRoutes);
app.use(errorHandler);


app.listen(config.PORT, async () => {
    await initializeDatabase();
    console.log(`Server listening on port ${config.PORT} in ${config.NODE_ENV}`);
  });