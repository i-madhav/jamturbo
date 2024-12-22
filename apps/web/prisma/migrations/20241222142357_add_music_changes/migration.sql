/*
  Warnings:

  - You are about to drop the column `url` on the `Music` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Music" DROP COLUMN "url",
ADD COLUMN     "channelName" TEXT,
ADD COLUMN     "videoId" TEXT,
ADD COLUMN     "videoImage" TEXT,
ADD COLUMN     "videoTitle" TEXT;
