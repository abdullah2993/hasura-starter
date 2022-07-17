import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { GetPostsQuery } from 'src/generated/graphql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(private apollo: Apollo) { }
  ngOnInit(): void {
    this.apollo.query<GetPostsQuery>({
      query: gql`query GetPosts{
        posts{
          id
          title
          description
          comments(limit: 10){
            id
            comment
          }
        }
      }`,
    context: {
      headers: { 'x-hasura-admin-secret': 'my-admin-secret' }, // Remove this, should never be exposed as its only for admins
    }}).subscribe(result =>{
      const {posts} = result.data;
      console.log(posts);

    });
  }
}
