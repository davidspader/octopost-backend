import type { SocialMediaModel } from '../models/social-media-model.js';
import type { SocialMediaRepository } from '../repositories/social-media.js';
import type { Service } from '@/shared/protocols/service.js';

export class ListSocialMediasService implements Service<SocialMediaModel> {
  constructor(private readonly socialMediaRepository: SocialMediaRepository) {}

  async execute() {
    return await this.socialMediaRepository.list();
  }
}
