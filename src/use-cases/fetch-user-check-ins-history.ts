import { CheckInsRepository } from '@/repositories/check-ins-repository'
import { CheckIn } from '@prisma/client'

interface FetchUserCheckInsGistoryInUseCaseRequest {
  userId: string
  page: number
}

interface FetchUserCheckInsGistoryInUseCaseResponse {
  checkIns: CheckIn[]
}

export class FetchUserCheckInsGistoryInUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
    page,
  }: FetchUserCheckInsGistoryInUseCaseRequest): Promise<FetchUserCheckInsGistoryInUseCaseResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(
      userId,
      page,
    )

    return {
      checkIns,
    }
  }
}
