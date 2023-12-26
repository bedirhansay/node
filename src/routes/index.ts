import express from "express";
import { AuthRouter } from "./auth";
import { SkillRouter } from "./skills";
import { ImagesRouter } from "./images";
import { checkAuth } from "../middleware";
import { AboutRouter } from "./about";
import { ProjectsRouter } from "./projects";
import { BlogRouter } from "./blog";
import { ExperienceRouter } from "./experince";
import { CategoriesRouter } from "./category";

const mainRouter = express.Router();

mainRouter.use("/auth", AuthRouter);
mainRouter.use("/skills", SkillRouter);
mainRouter.use("/images", checkAuth, ImagesRouter);
mainRouter.use("/about", checkAuth, AboutRouter);
mainRouter.use("/projects", checkAuth, ProjectsRouter);
mainRouter.use("/blog", checkAuth, BlogRouter);
mainRouter.use("/experience", checkAuth, ExperienceRouter);
mainRouter.use("/categories", checkAuth, CategoriesRouter);

export { mainRouter };
