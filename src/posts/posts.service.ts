import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const post = await this.postsRepository.create(createPostDto);
    return await this.postsRepository.save(post);
  }

  async findAll(): Promise<Post[]> {
    return await this.postsRepository.find();
  }

  async findOne(id: number): Promise<Post> {
    return await this.postsRepository.findOne(id);
  }

  async update(
    id: number,
    updatePostDto: UpdatePostDto,
  ): Promise<UpdateResult> {
    return await this.postsRepository.update(id, updatePostDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.postsRepository.delete(id);
  }
}
