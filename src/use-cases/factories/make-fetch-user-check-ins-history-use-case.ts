import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { FetchUserCheckInsGistoryInUseCase } from '../fetch-user-check-ins-history'

export function makeFetchUserCheckinsHistoryUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new FetchUserCheckInsGistoryInUseCase(checkInsRepository)

  return useCase
}
