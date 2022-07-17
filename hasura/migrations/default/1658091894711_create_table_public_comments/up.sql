CREATE TABLE "public"."comments" ("id" serial NOT NULL, "post_id" integer NOT NULL, "comment" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON UPDATE cascade ON DELETE cascade);
