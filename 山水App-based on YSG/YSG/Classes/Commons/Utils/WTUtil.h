//
//  WTUtil.h
//  FDLM
//
//  Created by mac on 15/8/10.
//  Copyright (c) 2015年 WangtianSoft. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface WTUtil : NSObject
+ (BOOL)checkPostalCode:(NSString *)postalCode;
+ (BOOL)isValidateEmail:(NSString *)email;
+ (BOOL)isValidateMobile:(NSString *)mobile;
+ (BOOL)isStringEmpty:(NSString *)str;
+ (BOOL)checkPassword:(NSString *) password;

+ (NSString *)trimStringEmpty:(NSString *)str;
+ (NSString *)trimStringNil:(NSString *)str;


+ (NSString *)md5:(NSString *)str;
+ (NSString *)md5OfFilePath:(NSString *)filePath;


+ (NSString *)stringOfPicturePath:(NSString *)pictureURL;

+ (unsigned long long)fileSizeForPath:(NSString *)path;
+ (NSArray *)imgArrayFromHTML:(NSString *)html;
@end
