import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postRepository: typeof Post) {}

  public async create(dto: CreatePostDto, image: any) {
    const filename = '_'; // Сделать далее
    const post = await this.postRepository.create({ ...dto, image: filename });
    return post;
  }
}
