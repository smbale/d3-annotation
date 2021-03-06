import annotation from './src/Adapter-d3'
import types from './src/Types-d3'

d3.annotation = annotation
d3.annotationTypeBase = types.Type
d3.annotationLabel = types.d3Label
d3.annotationCallout = types.d3Callout
d3.annotationCalloutCurve = types.d3CalloutCurve
d3.annotationCalloutElbow = types.d3CalloutElbow
d3.annotationCalloutCircle = types.d3CalloutCircle
d3.annotationCalloutRect = types.d3CalloutRect
d3.annotationXYThreshold = types.d3XYThreshold
d3.annotationBadge = types.d3Badge
d3.annotationCustomType = types.customType