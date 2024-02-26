import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, HttpHealthIndicator, HealthCheck } from '@nestjs/terminus';
import { ApiTags,ApiOperation } from '@nestjs/swagger';


@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  @ApiTags('有用的工具')
  @ApiOperation({ summary: '查看服务状态' })
  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck('bli-download', 'https://vrc-api.xiaohan-kaka.gay'),
      () => this.http.pingCheck('music-api', 'https://music-api.xiaohan-kaka.gay'),
      () => this.http.pingCheck('pixiv-api', 'https://pixiv-now.xiaohan-kaka.gay'),
    ]);
  }
}