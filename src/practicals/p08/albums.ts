interface FullAlbum {}
function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]>

import axios from 'axios';

interface Comment {
  postID: number;
  id: number;
  name: string;
  email: string;
  body: string;
}


export async function countCommentsByPost(): Promise<Record<number, number>> {
  try {
    
    const PHOTOS_URL = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/photos');
    const ALBUMS_URL = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/albums');
    
    
    const photo = PHOTOS_URL.data;
    const albums = ALBUMS_URL.data;
    
    
    const result: Record<number, number> = {};

    for (let i = 0; i < photo.length; i++){
        for(let i = 0; i < photo.length; i++){
            const comment = photo[i];
      const postID = comment.postID;

        }

      const comment = albums[i];
      const postID = comment.postID;

      if (postID != null && postID != undefined){
        
        if(result[postID] == undefined){

          result[postID] = 0;
        }
        result[postID] = result[postID]+1
      }
    }
    return result;

    
    }catch (error){

      throw new Error('Failed to fetch comments: ' + error);
    }
} 
