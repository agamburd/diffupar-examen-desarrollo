-- CreateTable
CREATE TABLE `Orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderId` VARCHAR(25) NOT NULL,
    `source` VARCHAR(25) NOT NULL,
    `bridgeId` VARCHAR(25) NULL,
    `storeId` VARCHAR(5) NOT NULL,
    `status` VARCHAR(25) NULL,
    `napseStatus` VARCHAR(15) NULL,
    `lastUpdated` DATETIME(3) NULL,
    `creationDate` VARCHAR(50) NULL,

    UNIQUE INDEX `Orders_orderId_storeId_source_key`(`orderId`, `storeId`, `source`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
