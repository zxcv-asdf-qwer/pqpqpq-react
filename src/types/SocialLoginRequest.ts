import { MemberRegisterTypes, OauthTypes } from '@/types/Type.ts'

export interface SocialLoginRequest {
  code?: string
  token: string
  memberRegisterType: MemberRegisterTypes
  oauthType?: OauthTypes // 만약 필요하다면 추가
}
