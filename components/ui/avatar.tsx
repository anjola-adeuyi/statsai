import * as React from 'react';
import { cn } from '@/lib/utils';

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(({ className, src, alt, fallback, ...props }, ref) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}>
      {!imgError && src ? (
        <img
          ref={ref}
          src={src}
          alt={alt}
          onError={() => setImgError(true)}
          className="h-full w-full object-cover"
          {...props}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
          {fallback ? (
            <span className="text-sm font-medium">{fallback}</span>
          ) : (
            <span className="text-sm font-medium">{alt?.[0]?.toUpperCase() || '?'}</span>
          )}
        </div>
      )}
    </div>
  );
});
Avatar.displayName = 'Avatar';

export { Avatar };
