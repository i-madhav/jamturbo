/*
  Warnings:

  - Made the column `channelName` on table `Music` required. This step will fail if there are existing NULL values in that column.
  - Made the column `videoId` on table `Music` required. This step will fail if there are existing NULL values in that column.
  - Made the column `videoImage` on table `Music` required. This step will fail if there are existing NULL values in that column.
  - Made the column `videoTitle` on table `Music` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Music" ALTER COLUMN "channelName" SET NOT NULL,
ALTER COLUMN "videoId" SET NOT NULL,
ALTER COLUMN "videoImage" SET NOT NULL,
ALTER COLUMN "videoTitle" SET NOT NULL;
