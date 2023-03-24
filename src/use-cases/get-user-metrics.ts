import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface GetUserMetricsInUseCaseRequest {
  userId: string
}

interface GetUserMetricsInUseCaseResponse {
  checkInsCount: number
}

export class GetUserMetricsInUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: GetUserMetricsInUseCaseRequest): Promise<GetUserMetricsInUseCaseResponse> {
    const checkInsCount = await this.checkInsRepository.countByUserId(userId)

    return {
      checkInsCount,
    }
  }
}
