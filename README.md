# warehouse-backend

# Product Query

CREATE TABLE "public".Product
(
 productId       integer NOT NULL GENERATED ALWAYS AS IDENTITY (
 start 1
 ),
 productName     varchar(50) NULL,
 productImage    varchar(50) NULL,
 productCategory varchar(50) NULL,
 CONSTRAINT PK_Customer PRIMARY KEY ( productId )
);

COMMENT ON TABLE "public".Product IS 'Basic information 
about Customer';

# Location Query

CREATE TABLE "public".Location
(
 locationId integer NOT NULL GENERATED ALWAYS AS IDENTITY (
 start 1
 ),
 CONSTRAINT PK_Supplier PRIMARY KEY ( locationId )
);

COMMENT ON TABLE "public".Location IS 'Basic information 
about Supplier';

# Product Movement Query

CREATE TABLE "public".Product_Movement
(
 MovementId   integer NOT NULL GENERATED ALWAYS AS IDENTITY (
 start 1
 ),
 productId    integer NOT NULL,
 "timestamp"    timestamp with time zone NOT NULL DEFAULT (now()),
 fromLocation varchar(50) NOT NULL,
 toLocation   varchar(50) NOT NULL,
 qty          int NOT NULL,
 CONSTRAINT PK_Order PRIMARY KEY ( MovementId ),
 CONSTRAINT FK_Order_CustomerId_Customer FOREIGN KEY ( productId ) REFERENCES "public".Product ( productId ) ON DELETE CASCADE
);

CREATE INDEX FK_Order_CustomerId_Customer ON "public".Product_Movement
(
 productId
);

COMMENT ON TABLE "public".Product_Movement IS 'Order information
like Date, Amount';

# Run the Express Server
## node server.js

