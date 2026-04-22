import {
    getReportFiles,
    getValidatorDefinitions,
    systemManifest as runtimeSystemManifest,
} from '../../scripts/core/system-manifest.mjs';

export const systemManifest = {
    validators: getValidatorDefinitions(),
    validatorNames: runtimeSystemManifest.validators.map(validator => validator.name),
    analyzers: [...runtimeSystemManifest.analyzers],
    analyzerTools: [...runtimeSystemManifest.analyzerTools],
    reports: getReportFiles(),
    transientReports: [...runtimeSystemManifest.transientReports],
    dashboardReports: [...runtimeSystemManifest.dashboardReports],
    requiredCommands: [...runtimeSystemManifest.requiredCommands],
    quickValidators: [...runtimeSystemManifest.quickValidators],
    generatedMarkdownFiles: [...runtimeSystemManifest.generatedMarkdownFiles],
    generatedCodeFiles: [...runtimeSystemManifest.generatedCodeFiles],
    ctaReportValidators: [...runtimeSystemManifest.ctaReportValidators],
    pipelineSteps: [...runtimeSystemManifest.pipelineSteps],
    debugModes: [...runtimeSystemManifest.debugModes],
} as const;